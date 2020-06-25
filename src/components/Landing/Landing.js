import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
    <main className="landing">

        <section className="flex landing__feature">
            <div className="flex">
                <img className="landing__img" alt="" src={require("../../assets/icons/check-double-solid.svg")}/>
                <div>
                    <h2 className="display-5">Select</h2>
                    <p className="text-3">Eiusmod ullamco id nostrud laborum do. Duis nulla veniam amet ad amet cupidatat incididunt commodo consequat magna consectetur aliqua. Quis ullamco qui Lorem nulla nostrud voluptate.</p>
                </div>
            </div>
            <div className="flex">
                <img className="landing__img" alt="" src={require("../../assets/icons/random-solid.svg")}/>
                <div>
                    <h2 className="display-5">Randomise</h2>
                    <p className="text-3">Eu irure excepteur irure adipisicing proident cillum laborum sunt est nulla do. Incididunt culpa consequat ex consectetur ut voluptate amet officia aliquip.</p>
                </div>
            </div>
            <div className="flex">
                <img className="landing__img" alt="" src={require("../../assets/icons/trophy-solid.svg")}/>
                <div>
                    <h2 className="display-5">Predict</h2>
                    <p className="text-3">Occaecat enim minim nostrud aliqua occaecat nulla ipsum proident mollit consequat excepteur exercitation. Occaecat officia culpa excepteur amet qui esse anim officia cupidatat officia.</p>
                </div>
            </div>
        </section>
        <div className="flex justify-center">
            <Link to="/draft">
                <button className="btn">Start</button>
            </Link>
        </div>
    </main>
);





export default Landing;




