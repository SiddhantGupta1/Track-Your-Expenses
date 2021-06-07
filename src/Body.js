import React from 'react'
import './Body.css'

const Body = () => {

    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const dated = new Date
    const date = dated.getDate()
    const month = dated.getMonth()
    const year = dated.getFullYear()

    return (
        <div className="Body">

            <a href="/about us"><header>About Us</header></a>
            <a href="/"><article>Log Out</article></a>
            <div className="top">
                <div className="budget">
                    <div className="budget_month">
                        Available Budget for <span className="month">MONTH</span>
                    </div>
                    <div className="budget_value">+ 0.00</div>
                    <div className="budget_income clearfix">
                        <div className="budget_income-text">INCOME</div>
                        <div className="right clearfix">
                            <div className="budget_income-value">+ 0.00</div>
                        </div>
                    </div>
                    <div className="budget_expense clearfix">
                        <div className="budget_expense-text">EXPENSES</div>
                        <div className="right clearfix">
                            <div className="budget_expense-value">- 0.00</div>
                            <div className="budget_percentage">---</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="input">
                    <select className="input_type">
                        <option value="inc" defaultValue="inc">+</option>
                        <option value="exp">-</option>
                    </select>
                    <input type="text" className="input_description" placeholder="Add Description" />
                    <input type="number" className="input_value" placeholder="Value" />
                    <button className="input_btn"><i className="ion-ios-checkmark-outline"></i></button>
                </div>
                <div className="date">{months[month]} {date}, {year}</div>
                <div className="table clearfix">
                    <div className="income">
                        <h2 className="income_title" style={{fontSize: "28px"}}>INCOME</h2>
                        <div className="income_list"></div>
                    </div>

                    <div className="expense">
                        <h2 className="expense_title" style={{fontSize: "28px"}}>EXPENSES</h2>
                        <div className="expense_list"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;
