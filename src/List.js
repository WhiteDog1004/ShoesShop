import axios from 'axios';
import { Link } from 'react-router-dom';



function List(props) {

    return(
        props.shoes.map(function(num, i){
            return(
                <div className='col-md-4' key={i}>
                    <Link to={'/detail/'+ (num.id)} >
                        <img src={'https://whitedog1004.github.io/shoes/shoes'+ (num.id + 1) +'.jpg'} width='100%' alt={i}></img>
                        <h4>{ num.title }</h4>
                        <span>{ num.content}</span>
                        <p>{ num.price }원</p>
                        <p>재고 : { num.stock }</p>
                    </Link>
                </div>

            )   
        })
      )
}

export default List;