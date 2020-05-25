import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://react-quiz-d8a71.firebaseio.com/'
})