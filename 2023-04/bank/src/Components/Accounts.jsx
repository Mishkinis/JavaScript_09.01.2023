import { useState } from "react";
import axios from "axios";
import SingleAccount from "./SingleAccount";
import format from "../Functions/format";
import AddAccount from "./AddAccount";
import { useEffect } from "react";

const accountsUrl = "http://localhost:5000/accounts";

export default function AccountList({ addMsg }) {

    const [accounts, setAccounts] = useState(null);
    const [editAccounts, setEditAccounts] = useState(null);
    const [lastUpdateTime, setLastUpdateTime] = useState(null);
    const [radioFilter, setRadioFilter] = useState(null);
    const handleFilterClick = (filter) => {
        if (radioFilter === filter) {
            setRadioFilter(null);
            return;
        }
        setRadioFilter(filter);
    };

    useEffect(() => {
        axios.get(accountsUrl).then(res => {
            setAccounts(res.data.accounts);
        })
    }, [lastUpdateTime]);

    useEffect(() => {
        if (editAccounts === null) {
            return;
        }
        axios.put(accountsUrl, { account: editAccounts }).then((res) => {
            setLastUpdateTime(Date.now());
        })
    }, [editAccounts]);

    function addAccount(name, surname) {
        axios.post(accountsUrl, { account: { name, surname, money: 0 } }).then((res) => {
            setLastUpdateTime(Date.now());
        });
    };

    function delAccount(id) {
        axios.delete(accountsUrl + '/' + id).then((res) => {
            setLastUpdateTime(Date.now());
        });
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
                    <span className={'checkbox sns mar' + (radioFilter === 'hasMoney' ? ' checked' : '')} onClick={() => handleFilterClick('hasMoney')}>Accounts with funds</span>
                    <span className={'checkbox sns mar' + (radioFilter === 'noMoney' ? ' checked' : '')} onClick={() => handleFilterClick('noMoney')}>Accounts with 0€</span>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Surname</th>
                            <th>Name</th>
                            <th>Funds</th>
                            <th>Transfers</th>
                            <th>Delete account</th>
                        </tr>
                    </thead>
                    <tbody>
                        {radioFilter === 'hasMoney' && [...accounts]
                            .sort((a, b) => a.surname.localeCompare(b.surname, 'lt', { sensitivity: 'base' }))
                            .map((account) => (
                                account.money > 0 && <SingleAccount key={account.id} account={account} delAccount={delAccount} setEditAccounts={setEditAccounts} addMsg={addMsg} />
                            ))}
                        {radioFilter === 'noMoney' && [...accounts]
                            .sort((a, b) => a.surname.localeCompare(b.surname, 'lt', { sensitivity: 'base' }))
                            .map((account) => (
                                account.money === 0 && <SingleAccount key={account.id} account={account} delAccount={delAccount} setEditAccounts={setEditAccounts} addMsg={addMsg} />
                            ))}
                        {radioFilter === null && [...accounts]
                            .sort((a, b) => a.surname.localeCompare(b.surname, 'lt', { sensitivity: 'base' }))
                            .map((account) => (
                                <SingleAccount key={account.id} account={account} delAccount={delAccount} setEditAccounts={setEditAccounts} addMsg={addMsg} />
                            ))}
                    </tbody>
                </table>
            </div>
            <AddAccount addAccount={addAccount} addMsg={addMsg} />
        </>
    );
}