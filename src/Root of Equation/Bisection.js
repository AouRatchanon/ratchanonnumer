import React, { Component } from 'react'
import { Card, Button, Row, Col, Table, Input } from 'antd'
import { range, compile } from 'mathjs'
import Axios from 'axios';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const { Column, ColumnGroup } = Table;
var fx = "";

var dataSource = [];
const columns = [
    {
        title: "Iteration",
        dataIndex: "iteration",
        key: "iteration"
    },
    {
        title: "XL",
        dataIndex: "xl",
        key: "xl"
    },
    {
        title: "XM",
        dataIndex: "xm",
        key: "xm"
    },
    {
        title: "XR",
        dataIndex: "xr",
        key: "xr"
    },
    {
        title: "Error",
        dataIndex: "error",
        key: "error"
    }
];

const xValues = range(-10, 10, 0.5).toArray();

class Bisection extends Component {
    data = async(number) =>{
        var response = await Axios.get('http://localhost:3001/api/users/showBisectionmodel').then(res => {return res.data});
            this.setState({
                fx:response['data'][number]['fx'],
                xl:response['data'][number]['xl'],
                xr:response['data'][number]['xr']
            })
            this.bisection(this.state.xl,this.state.xr);
    }
    constructor(props) {
        super(props)
        this.state = {
            fx: "",
            XL: 0,
            XR: 0,
            number: 0,
            showGraph: false,
            showtable: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    bisection(XL, XR) {
        fx = this.state.fx;
        var increaseFunction = false;
        var XM = 0;
        var epsilon = parseFloat(0.000000);
        var n = 0;
        var dXL = [];
        var dXR = [];
        var dX = [];
        var derror = [];
        if (this.func(XL) < this.func(XR)) {
            increaseFunction = true;
        }
        do {
            XM = (XL + XR) / 2;
            if (this.func(XM) * this.func(XR) < 0) {
                epsilon = this.error(XM, XR);
                if (increaseFunction) {
                    XL = XM;
                } else {
                    XR = XM;
                }
            } else {
                epsilon = this.error(XM, XL);
                if (increaseFunction) {
                    XR = XM;
                }
                else {
                    XL = XM;
                }
            }
            dXL[n] = XL;
            dXR[n] = XR;
            dX[n] = XM.toFixed(8);
            derror[n] = Math.abs(epsilon).toFixed(8);
            n++;
        } while (Math.abs(epsilon) > 0.000001);
        for (var i = 0; i < dXL.length; i++) {
            dataSource.push({
                iteration: i + 1,
                xl: dXL[i],
                xm: dX[i],
                xr: dXR[i],
                error: derror[i]
            });
        }
        this.setState({
            showGraph: true,
            showtable: true
        });
    }
    func(X) {
        var expr = compile(this.state.fx);
        let scope = { x: parseFloat(X) };
        return expr.eval(scope);
    }
    error(xnew, xold) {
        return Math.abs((xnew - xold) / xnew);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <Card
                            title={"Input Bisection Data"}
                            bordered={true}
                            style={{ width: 700 }}
                            onChange={this.handleChange}
                        >
                            <div>
                                <h2>f(x)</h2> <Input size="large" name="fx"></Input>
                                <h2>X<sub>L</sub></h2> <Input size="large" name="XL"></Input>
                                <h2>X<sub>R</sub></h2> <Input size="large" name="XR"></Input>
                            </div>

                            <br />
                            <Button
                                id="submit_button"
                                style={{ background: "#4dea6f", color: "green" }}
                                onClick={() =>
                                    this.bisection(
                                        parseFloat(this.state.XL),
                                        parseFloat(this.state.XR)
                                    )
                                }
                            >
                                Summit
                            </Button>
                        </Card>
                    </Col>

                    <Col span={12}>
                        <Card
                            title={"Input Database"}
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
                                    this.data(
                                        parseFloat(this.state.number),
                                    )
                                }
                            >
                                Summit
                            </Button>
                        </Card>
                    </Col>
                </Row>
                <br />
                {this.state.showGraph &&

                    <Card
                        style={{ borderRadius: "50px" }}
                    >
                        <LineChart width={730} height={250} data={dataSource}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <XAxis dataKey="error" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend verticalAlign="top" height={36} />
                            <Line name="error" type="monotone" dataKey="error" stroke="#8884d8" />
                        </LineChart>
                    </Card>

                }
                <br />
                <Row>
                    {this.state.showtable && (
                        <Col span={24}>
                            <Table dataSource={dataSource} columns={columns} />
                        </Col>
                    )}
                </Row>

            </div>
        );
    }
}

export default Bisection
