import React from 'react';

const Landing = () => (
    <header>
        <h1 className="display-1">Random Fantasy Football</h1>
        <section className="flex">
            <div className="flex">
                <img className="landing__img" alt="" src={require("../../assets/icons/check-double-solid.svg")}/>
                <div>
                    <h2 className="display-5">Select</h2>
                    <p>Eiusmod ullamco id nostrud laborum do. Duis nulla veniam amet ad amet cupidatat incididunt commodo consequat magna consectetur aliqua. Quis ullamco qui Lorem nulla nostrud voluptate.</p>
                </div>
            </div>
            <div className="flex">
                <img className="landing__img" alt="" src={require("../../assets/icons/random-solid.svg")}/>
                <div>
                    <h2 className="display-5">Randomise</h2>
                    <p>Eu irure excepteur irure adipisicing proident cillum laborum sunt est nulla do. Incididunt culpa consequat ex consectetur ut voluptate amet officia aliquip.</p>
                </div>
            </div>
            <div className="flex">
                <img className="landing__img" alt="" src={require("../../assets/icons/trophy-solid.svg")}/>
                <div>
                    <h2 className="display-5">Predict</h2>
                    <p>Occaecat enim minim nostrud aliqua occaecat nulla ipsum proident mollit consequat excepteur exercitation. Occaecat officia culpa excepteur amet qui esse anim officia cupidatat officia.</p>
                </div>
            </div>
        </section>
        <button className="btn">Start</button>
    </header>
);

export default Landing;




