import * as React from "react";
import * as Service from "../../Service/Service";
import './ListMovies.css';
import Navbar from "../../Content/Navbar/Navbar";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

class ListMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
        }

    }

    componentDidMount() {
        Service.getMoviesDataInitialSearch().then(response =>{
            const data = response.Search;
            this.props.dispatch({type: 'GET_LIST_SUCCESS', data: data});
            this.setState({data});
        });
    }

    handleClick() {
        // Get the modal
        let modal = document.getElementById("myModal");

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        let imgs = document.getElementsByClassName("images");
        let modalImg = document.getElementById("img01");
        let captionText = document.getElementById("caption");
        let arr = [...imgs];

        arr.forEach(img => {
            img.onclick = function(){
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
        });

        // Get the <span> element that closes the modal
        let span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    render() {
        let link;
        return (
            <div className="card">
                <Navbar/>
                <table className="table table-striped tbl">
                    <thead>
                    <th></th>
                    <th>Title</th>
                    </thead>
                    <tbody>

                    {this.state.data.map((movie, index) => (
                        link = `/detail?title=${movie.Title}`,
                        <tr>
                            <td className="td">
                                <img className="images" id="myImg" src={movie.Poster} onClick={this.handleClick}></img>
                            </td>
                            <td className="td">
                                <Link to={link}>
                                    <p>{movie.Title} <em>({movie.Year})</em></p>
                                </Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <div id="myModal" className="modal">
                    <span className="close">&times;</span>
                    <img className="modal-content" id="img01"></img>
                        <div id="caption"></div>
                </div>

            </div>
        )
    }
};

function mapStateToProps(state) {
    return {...state.list}
}

export default connect(mapStateToProps)(ListMovies);