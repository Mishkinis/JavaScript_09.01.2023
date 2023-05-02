import CurrencyInput from "react-currency-input-field";
import { useState } from "react";
import format from "../Functions/format";


export default function SingleAccount({ account, setEditAccounts, delAccount, addMsg }) {
    const [newAmount, setNewAmmount] = useState("");


    const changeAmmount = (value) => {
        if (value) {
            setNewAmmount(value);
            return;
        }
        setNewAmmount("");
    };

    const addMoney = () => {
        if (newAmount !== "") {
            setEditAccounts({ ...account, money: account.money + newAmount });
            addMsg({ type: 'success', text: 'Funds added!' });
            setNewAmmount("");
        }
    }

    const subMoney = () => {
        if (newAmount !== "") {
            if (account.money - newAmount < 0) {
                addMsg({ type: 'error', text: "Can't be less than 0€" });
                return;
            }
            setEditAccounts({ ...account, money: account.money - newAmount });
            addMsg({ type: 'success', text: 'Funds reduced!' });
            setNewAmmount("");
        }
    };

    const handleDel = () => {
        if (account.money > 0) {
            addMsg({ type: 'error', text: "Cannot delete account with funds!" });
            return;
        }
        delAccount(account.id);
        addMsg({ type: "success", text: "Account delete successful!" });
    }
    return (
        <tr>
            <td>{account.surname}</td>
            <td>{account.name}</td>
            <td>{format(account.money)}</td>
            <td>
                <CurrencyInput className="laukelis" id="amount" placeholder="Amount" suffix=" &euro;" value={newAmount} onValueChange={(value) => changeAmmount(Number(value))} /><button className="sns" onClick={addMoney}>Add</button><button className="sns" onClick={subMoney}>Remove</button>
            </td>
            <td>
                <button className={`sns ${account.money > 0 ? "disabled" : null}`} onClick={handleDel}>Delete</button>
            </td>
        </tr>
    )
}