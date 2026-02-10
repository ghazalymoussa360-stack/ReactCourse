// utiliser un conditionem dans un composant de fonctipn


function TodayPlan() {
    let task;
    let apocalypse = true;

    if (apocalypse) {
        task = "Learn React";
    } else {
        task = "Go outside and play";
    }

    return (
        <div>
            <h1>Today's Plan</h1>
            <p>{task}</p>
        </div>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<TodayPlan />);
// c'est une condition ternaire, il permet de faire une condition dans un composant de fonction, il est plus court que la condition if else, il est plus facile à lire et à comprendre.     
