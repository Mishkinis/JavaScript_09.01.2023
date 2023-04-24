import CurrencyInput from "react-currency-input-field";
import { useState } from "react";
import format from "../Functions/format";


export default function SingleAccount({ account, setAccounts, delAccount, addMsg }) {
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
            setAccounts((accounts) => {
                return accounts.map((item) => item.id === account.id ? { ...item, money: item.money + newAmount } : item)
            });
            addMsg({ type: 'success', text: 'Funds added!' });
            setNewAmmount("");
        }
    }

    const subMoney = () => {
        if (newAmount !== "") {
            if (account.money - newAmount < 0) {
                addMsg({ type: 'error', text: "This account can't have less than 0€" });
                return;
            }
            setAccounts((accounts) => {
                return accounts.map((item) => item.id === account.id ? { ...item, money: item.money - newAmount } : item)
            });
            addMsg({ type: 'success', text: 'Funds removed!' });
            setNewAmmount("");
        }
    };

    const handleDel = () => {
        if (account.money > 0) {
            addMsg({ type: 'error', text: "Cannot delete an account with funds" });
            return;
        }
        delAccount(account.id);
        addMsg({ type: "success", text: "Account deleted" });
    }
    return (
        <tr>
            <td>{account.surname}</td>
            <td>{account.name}</td>
            <td>{format(account.money)}</td>
            <td>
                <CurrencyInput className="laukelis" id="amount" placeholder="Amount" suffix=" &euro;" value={newAmount} onValueChange={(value) => changeAmmount(Number(value))} /><button className="sns" onClick={addMoney}>Add</button><button className="sns" onClick={subMoney}>Reduse</button>
            </td>
            <td>
                <button className={`sns ${account.money > 0 ? "disabled" : null}`} onClick={handleDel}>Delete</button>
            </td>
        </tr>
    )
}