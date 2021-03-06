import React, { Component } from 'react'
import { Card, Button, Row, Col, Table, Input } from 'antd'
import { compile,derivative} from 'mathjs'
import Axios from 'axios';

var y, error, exact;

class backwardh2 extends Component {
    datas = async (number) => {
        var response = await Axios.get('http://localhost:3001/api/users/showh2backwardmodel').then(res => { return res.data });
        this.setState({
            fx: response['data'][number]['fx'],
            degree: response['data'][number]['degree'],
            x: response['data'][number]['x'],
            h: response['data'][number]['h'],
        })
        this.backwardh2(this.state.degree, this.state.x,this.state.h);
    }
    constructor() {
        super();
        this.state = {
            fx: "",
            x: 0,
            h: 0,
            degree: 0,
            number: 0,
            showOutputCard: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });

    }
    backwardh2(degree, x, h) {
        switch (degree) {
            case 1:
                y = (3*this.func(x) - 4*this.func(x-(1*h)) + this.func(x-(2*h))) / (2*h)
                break;
            case 2:
                y = (2*this.func(x) - 5*this.func(x-(1*h)) + 4*this.func(x-(2*h)) - this.func(x-(3*h))) / Math.pow(h, 2)
                break;
            case 3:
                y = (5*this.func(x) - 18*this.func(x-(1*h)) + 24*this.func(x-(2*h)) - 14*this.func(x-(3*h)) + 3*this.func(x-(3*h))) / (2*Math.pow(h, 3))
                break;
            default:
                y = (3*this.func(x) - 14*this.func(x-(1*h)) + 26*this.func(x-(2*h)) - 24*this.func(x-(3*h)) + 11*this.func(x-(4*h)) - 2*this.func(x-(5*h))) / Math.pow(h, 4) 
        } 
        exact = this.funcDiff(x, degree)
        error = Math.abs((y - exact) / y)*100
        this.setState({
            showOutputCard: true
        })
    }

    func(X) {
        var expr = compile(this.state.fx);
        let scope = {x:parseFloat(X)};
        return expr.eval(scope);        
    }
    funcDiff(X, degree) {
        var temp = this.state.fx, expr 
        for (var i=1 ; i<=degree ; i++) {
            temp = derivative(temp, 'x')
            expr = temp
        }
        
        let scope = {x:parseFloat(X)}
        return expr.eval(scope)
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <Card
                            title={"Input Backward Difference O(h2) Data"}
                            bordered={true}
                            style={{ width: 700 }}
                            onChange={this.handleChange}
                        >
                            <div>
                                <h2>f(x)</h2> <Input size="large" name="fx"></Input>
                                <h2>Diff</h2> <Input size="large" name="degree" ></Input>
                                <h2>X</h2> <Input size="large" name="x" ></Input>
                                <h2>H</h2> <Input size="large" name="h" ></Input>
                            </div>
                            <br />
                            <Button
                                id="submit_button"
                                style={{ background: "#4dea6f", color: "green" }}
                                onClick={() =>
                                    this.backwardh2(
                                        parseFloat(this.state.degree),
                                        parseFloat(this.state.x),
                                        parseFloat(this.state.h)
                                    )
                                }
                            >
                                submit
                        </Button>
                        </Card>
                    </Col>

                    <Col span={12}>
                        <Card
                            title={"Input Backward Difference in Database"}
                            bordered={true}
                            style={{ width: 700 }}
                            onChange={this.handleChange}
                        >
                            <div>
                                <h2>Number</h2> <Input size="large" name="number"></Input>
                            </div>
                            <br />
                            <Button
                                id="submit_button"
                                style={{ background: "#4dea6f", color: "green" }}
                                onClick={() =>
                                    this.datas(
                                        parseFloat(this.state.number),
                                    )
                                }
                            >
                                submit
                            </Button>
                        </Card>
                    </Col>
                </Row>
                <br />
                <Row>
                    {this.state.showOutputCard &&
                        <Col span={24}>
                            <Card
                                bordered={true}
                                style={{ width: 700 }}
                                onChange={this.handleChange
                                }
                            >
                                <div>
                                    <p style={{ fontSize: "24px"}}>
                                        Approximate = {y.toFixed(6)}<br />
                                        Exact = {exact.toFixed(6)}<br />
                                        Error = {error.toFixed(6)}%
                                    </p>
                                </div>
                            </Card>

                        </Col>
                    }
                </Row>
            </div>
        )
    }
}

export default backwardh2
