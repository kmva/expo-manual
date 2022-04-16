import './Home.css';
import { Sidebar } from '../../Components/Shared/Sidebar';


export const Home = () => {

   

    return (
        <div className="home-page">
            <Sidebar />

            <div className="home-content">
                    <h1>Welcome to the home page !</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Sem integer vitae justo eget magna fermentum iaculis
                    eu non. Aliquet enim tortor at auctor urna. Sed adipiscing
                    diam donec adipiscing tristique risus nec feugiat in. 
                    Dignissim diam quis enim lobortis scelerisque fermentum
                    dui faucibus. Sagittis vitae et leo duis ut diam quam nulla.
                    Massa eget egestas purus viverra accumsan in. Rutrum tellus
                    pellentesque eu tincidunt tortor aliquam nulla facilisi cras.
                    Nunc mi ipsum faucibus vitae aliquet. Amet mattis vulputate enim
                    nulla aliquet porttitor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit.
                    Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec.
                    Nisl tincidunt eget nullam non nisi est sit amet facilisis. 
                    Auctor eu augue ut lectus. Fermentum dui faucibus in ornare.
                    Et pharetra pharetra massa massa ultricies mi quis.</p>
            </div>
        </div>
    )
}

