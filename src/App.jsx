import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            message: '',
            chirps: []
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                chirps: [
                    ...this.state.chirps,
                    {
                        id: uuidv4(),
                        username: 'rolltidefan1000',
                        message: 'SEC Basketball Champs! Woo-Hoo!'
                    },
                    {
                        id: uuidv4(),
                        username: 'bamagirl23',
                        message: 'not used to this'
                    },
                    {
                        id: uuidv4(),
                        username: 'rolltidefan1000',
                        message: 'it\'s awesome!'
                    }
                ]
            });
        }, 2000);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            username: "",
            message: "",
            chirps: [...this.state.chirps, { id: uuidv4(), username: this.state.username, message: this.state.message }]
        })
    }

    render() {
        return (
            <main className="container">
                <section className="row justify-content-center mt-5">
                    <div className="col-md-7">
                        <form className="form-group">
                            <label>Username:</label>
                            <input className="form-control" value={this.state.username} onChange={e => this.setState({ username: e.target.value })} />
                            <label>Message:</label>
                            <input className="form-control" value={this.state.message} onChange={e => this.setState({ message: e.target.value })} />
                            <button className="btn btn-primary mt-3" onClick={e => this.handleSubmit(e)}>Chirp It</button>
                        </form>
                    </div>
                </section>
                <section className="row justify-content-center mt-3">
                    <div className="col-md-6">
                        <ul className="list-group">
                            {this.state.chirps.map(chirp => (
                                <li className="list-group-item" key={`chirp-${chirp.id}`}>@{chirp.username} <br></br>{chirp.message}</li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        )
    }
}

export default App;