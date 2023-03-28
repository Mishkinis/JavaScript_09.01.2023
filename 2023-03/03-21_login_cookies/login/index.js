import express from 'express'
import fs from 'node:fs/promises'
import { engine } from 'express-handlebars'
import session from 'express-session'
import { auth } from './middleware/auth.js'
import multer from 'multer'

//CRUD = Create Read Update Delete

const app = express()
const file = './database.json'
const uploadsDir = './uploads'
const gallery = './gallery.json'
const storage = multer.diskStorage({
    destination: async (req, file, next) => {
        try {
            await fs.access(uploadsDir)
        } catch {
            fs.mkdir(uploadsDir)
        }

        next(null, uploadsDir)
    },
    filename: (req, file, next) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const nameParts = file.originalname.split('.')
        next(null, uniqueSuffix + '.' + nameParts[nameParts.length - 1])
    }
})
const upload = multer({
    storage,
    fileFilter: (req, file, next) => {
        const allowed = [
            'image/gif',
            'image/jpeg',
            'image/png',
            'image/svg+xml',
            'image/webp'
        ]

        if(allowed.includes(file.mimetype))
            next(null, true)
    }
})
// app.set('trust proxy', 1);

//sesijos duomenu konfiguracija
app.use(session({
    secret: 'labai slapta fraze',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

//konfiguracine eilute kuri yra butina norint POST metodu priimti duomenis
app.use(express.urlencoded({
    extended: true
}))

//handlebars konfiguracija
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//Failu perdavimo aktyvavimui naudojama kanfiguracine eilute
app.use('/uploads', express.static('./uploads'))

//prisijungimo forma
app.get('/login', (req, res) => {
    res.render('login')
})
//prisijungimo duomenu tikrinimas
app.post('/login', async (req, res) => {
    let data = JSON.parse(await fs.readFile(file, 'utf-8'));

    const index = data.findIndex(user => user.email === req.body.email && user.password === req.body.password);
    if(index != -1) {
        req.session.loggedIn = true;
        req.session.user = {
            id: index,
            name: data[index].name,
            last_name: data[index].last_name,
            email: data[index].email
        }
        return res.redirect('/');
    }

    res.redirect('/login');
});

//visu vartotoju sarasas
app.get('/', auth, async (req, res) => {
    const data = JSON.parse(await fs.readFile(file, 'utf-8'))
    const modifiedData = data.map(user => {
        if(user.email === req.session.user?.email)
            user.current = true

        return user
    })

    res.render('admin', {
        user: req.session.user,
        message: req.session.message,
        data: modifiedData
    })

    delete req.session.message
})

//naujo vartotojo forma
app.get('/new-user', auth, (req, res) => {
    res.render('newuser', {
        user: req.session.user,
        message: req.session.message
    })

    delete req.session.message
})

//naujo vartotojo issaugojimas
app.post('/new-user', auth, upload.single('photo'), async (req, res) => {
    //console.log(req.file.pathreplace('\\','/'))
    if(req.file)
        req.body.photo = req.file.path.replace('\\','/')

    try {
        let data = JSON.parse(await fs.readFile(file, 'utf-8'))

        if(data.find(user => user.email === req.body.email)) {
            req.session.message = 'Vartotojas tokiu el. pašto adresu jau registruotas'
            return res.redirect('/new-user')
        }
    
        data.push(req.body)
        await fs.writeFile(file, JSON.stringify(data))
    } catch {
        await fs.writeFile(file, JSON.stringify([req.body]))
    }

    res.redirect('/')
})

//istrinti vartotoja
app.get('/delete-user/:id', auth, async (req, res) => {
    const data = JSON.parse(await fs.readFile(file, 'utf-8'))
    //const currentUser = data.findIndex(user => user.email === req.session.user?.email)
    if(req.session.user.id == req.params.id) {
        req.session.message = 'Šio vartotojo ištrynimas negalimas'
        return res.redirect('/')
    }

    data.splice(req.params.id, 1)
    await fs.writeFile(file, JSON.stringify(data))

    res.redirect('/')
})

//redaguoti vartotoja
app.get('/edit-user/:id', auth, async (req, res) => {
    const data = JSON.parse(await fs.readFile(file, 'utf-8'))
    
    res.render('edituser', {
        user: req.session.user,
        message: req.session.message,
        currentUser: data[req.params.id]
    })
    
    delete req.session.message
})

app.post('/edit-user/:id', auth, async (req, res) => {
    const data = JSON.parse(await fs.readFile(file, 'utf-8'))
    if(data.find((user, index) => user.email === req.body.email && index != req.params.id)) {
        req.session.message = 'Toks el. pašto adresas jau registruotas'
        return res.redirect('/edit-user/' + req.params.id)
    }
    
    data[req.params.id] = req.body
    await fs.writeFile(file, JSON.stringify(data))

    res.redirect('/')
})

//atsijungimas
app.get('/logout', auth, (req, res) => {
    req.session.destroy()
    res.redirect('/login')
})

//konkurso nuotraukos ikelimas
app.get('/new-photo', auth, upload.single('photo'), async (req, res) => {
    res.render('newphoto')
})

app.post('/new-photo', auth, upload.single('photo'), async (req, res) => {
        if(req.file)
        req.body.photo = req.file.path.replace('\\','/')

        // const users = JSON.parse(await fs.readFile(file, 'utf-8'))
        // users.findIndex(user => user.email === req.session.user.email).............................
        req.body.userId = req.session.body
        
    try {
        let data = JSON.parse(await fs.readFile(gallery, 'utf-8'))

       data.push(req.body)
       await fs.writeFile(gallery, JSON.stringify(data))
    
    } catch {
        await fs.writeFile(gallery, JSON.stringify([req.body]))
    }

    res.redirect('/')
})

app.get('/gallery', async (req, res) => {
    const galleryData = JSON.parse(await fs.readFile(gallery, 'urf-8'))
    const userData = JSON.parse(await fs.readFile(file, 'urf-8'))

    for(const index in galleryData) {
        const userInfo =userData[galleryData[i].userID]
        galleryData[i].userInfo = userInfo

        galleryData[i].totalRating = 2
    }

    res.render('gallery', {data: galleryData})
})

app.post('/gallery/:id', auth, async (req, res) => {
    const galleryData = JSON.parse(await fs.readFile(gallery, 'urf-8'))
    const ratingData = {
        rating: +req.body.rating,
        userId: req.session.user.id}

    if(!galleryData[req.params.id].ratings) {
        galleryData[req.params.id].ratings = [ratingData]
    } else {
        galleryData[req.params.id].ratings.push(galleryData)
    }

    await fs.writeFile(gallery, JSON.stringify(galleryData))

    res.redirect('/gallery')
})
app.listen(3000)