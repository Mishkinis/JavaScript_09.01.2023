import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import SingleAccount from "./SingleAccount";
import format from "../Functions/format";
import AddAccount from "./AddAccount";
import { useEffect } from "react";



export default function AccountList({ addMsg }) {

    const [accounts, setAccounts] = useState(null);
    const [radioFilter, setRadioFilter] = useState(null);
    const handleFilterClick = (filter) => {
        if (radioFilter === filter) {
            setRadioFilter(null);
            return;
        }
        setRadioFilter(filter);
    };

    useEffect(() => {
        if (null !== localStorage.getItem('accounts')) {
            setAccounts(JSON.parse(localStorage.getItem('accounts')));
        } else {
            setAccounts([]);
        }
    }, []);

    useEffect(() => {
        if (accounts === null) {
            return;
        }
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }, [accounts]);

    function addAccount(name, surname) {
        setAccounts((accounts) => {
            return [...accounts, { id: uuidv4(), name, surname, money: 0 }]
        })
    };

    function delAccount(id) {
        setAccounts(accounts => [...accounts].filter(account => account.id !== id));
    };

    if (accounts === null) {
        return null;
    };

    return (
        <>
            <div className="container">
                <p className="stats">Number of accounts: {accounts.length}</p>
                <p className="stats"> Money deposited: {format(accounts.reduce((acc, curr) => acc + curr.money, 0))} </p>
                <div>
                    <span className={'checkbox sns' + (radioFilter === 'hasMoney' ? ' checked' : '')} onClick={() => handleFilterClick('hasMoney')}>Show accounts with funds</span>
                    <span className={'checkbox sns' + (radioFilter === 'noMoney' ? ' checked' : '')} onClick={() => handleFilterClick('noMoney')}>Show accounts without funds</span>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Surname</th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Transfers</th>
                            <th>Delete account</th>
                        </tr>
                    </thead>
                    <tbody>
                        {radioFilter === 'hasMoney' && [...accounts]
                            .sort((a, b) => a.surname.localeCompare(b.surname, 'lt', { sensitivity: 'base' }))
                            .map((account) => (
                                account.money > 0 && <SingleAccount key={account.id} account={account} delAccount={delAccount} setAccounts={setAccounts} addMsg={addMsg} />
                            ))}
                        {radioFilter === 'noMoney' && [...accounts]
                            .sort((a, b) => a.surname.localeCompare(b.surname, 'lt', { sensitivity: 'base' }))
                            .map((account) => (
                                account.money === 0 && <SingleAccount key={account.id} account={account} delAccount={delAccount} setAccounts={setAccounts} addMsg={addMsg} />
                            ))}
                        {radioFilter === null && [...accounts]
                            .sort((a, b) => a.surname.localeCompare(b.surname, 'lt', { sensitivity: 'base' }))
                            .map((account) => (
                                <SingleAccount key={account.id} account={account} delAccount={delAccount} setAccounts={setAccounts} addMsg={addMsg} />
                            ))}
                    </tbody>
                </table>
            </div>
            <AddAccount addAccount={addAccount} addMsg={addMsg} />
        </>
    );
}