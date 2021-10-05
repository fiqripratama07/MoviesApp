import * as React from "react";
import * as Service from "../../Service/Service";
import './Detail.css';
import Star from '../../Image/star.png';
import Previous from '../../Image/previous.png';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : {}
        }
    }

    componentDidMount() {
        const queryParams = new URLSearchParams(window.location.search);
        const title = queryParams.get('title');

        Service.getMoviesDataByTitle(title).then(response =>{
            const data = response;
            this.props.dispatch({type: 'GET_DETAIL_SUCCESS', data: data});
            this.setState({data});
        });
    }

    render() {
        const movie = this.state.data;

        return (
            <div>
                <Link to="/"><img className="prev" src={Previous}></img><b className="b">Back</b></Link>
                <div className="card cardd">
                    <div className="card-body">
                        <p className="font-monospace title">{movie.Title}

                        </p>
                        <p><button className="btn btn-primary">{movie.Year}</button>
                            <em> </em>
                            <button className="btn btn-success">{movie.Runtime}</button>
                            <em> </em>
                            <button type="button" className="btn btn-danger">{movie.Country}</button>
                        </p>
                        <img src={movie.Poster} className="img-fluid img-detail" alt="Poster"></img>
                        <br/>
                        <h5>{movie.Plot}</h5>
                        <table className="table table-striped tbl">
                            <tr>
                                <td>Director : </td>
                                <td>{movie.Director}</td>
                            </tr>
                            <tr>
                                <td>Writer : </td>
                                <td>{movie.Writer}</td>
                            </tr>
                            <tr>
                                <td>Stars : </td>
                                <td>{movie.Actors}</td>
                            </tr>
                            <tr>
                                <td>Production : </td>
                                <td>{movie.Production}</td>
                            </tr>
                            <tr>
                                <td>Rate : </td>
                                <td>
                                    <img className="img-star" src={Star}></img>
                                    <em> </em>
                                    <em className="rate">{movie.imdbRating}</em>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {...state.detail}
}

export default connect(mapStateToProps)(Detail);