import * as React from "react";
import * as Service from "../../Service/Service";
import './Search.css';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            s:"",
            results:[],
            selected:{}
        }

    }

    search = (e) => {
        e.preventDefault();
        Service.getMoviesDataBySearch(this.state.s).then((data) => {
            this.props.dispatch({type: 'GET_SEARCH_SUCCESS', results: data.Search});
            this.setState({results: data.Search})
        })
    }

    handleInput = (e) => {
        let s = e.target.value;

        this.setState(prevState => {
            return {...prevState, s: s};
        });

    };

    render() {
        let link;
        return (
            <div className="srch">
                <form className="d-flex search">
                    <input className="form-control me-2 " type="search" placeholder="Search Movie" aria-label="Search" onChange={this.handleInput}></input>
                    <button className="btn btn-outline-success" type="submit" onClick={this.search}>Search</button>
                </form>

                {this.state.results.length > 5 &&
                <table className="float" style={{'height': '300px', 'overflow':'scroll', 'display': 'block', 'content': 'Float'}}>
                    {this.state.results.map((movie, index) => (
                        link = `/detail?title=${movie.Title}`,
                        <button type="button" className="list-group-item list-group-item-action"
                                aria-current="true">
                            <tr>
                                <td>
                                    <img className="images" id="myImg" src={movie.Poster}></img>
                                </td>
                                <td>
                                    <Link to={link}>
                                        <p className="par">{movie.Title} <em>({movie.Year})</em></p>
                                    </Link>
                                </td>
                            </tr>
                        </button>
                    ))}
                </table>
                }

                {this.state.results.length < 5 &&
                <table>
                    {this.state.results.map((movie) => (
                        link = `/detail?title=${movie.Title}`,
                        <button type="button" className="list-group-item list-group-item-action"
                                aria-current="true">
                            <tr>
                                <td>
                                    <img className="images" id="myImg" src={movie.Poster}></img>
                                </td>
                                <Link to={link}>
                                    <p className="par">{movie.Title} <em>({movie.Year})</em></p>
                                </Link>
                            </tr>
                        </button>
                    ))}
                </table>
                }


            </div>
        )
    }
}

function mapStateToProps(state) {
    return {...state.search}
}

export default connect(mapStateToProps)(Search);