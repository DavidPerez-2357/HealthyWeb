import broccoli_dancing from '/src/assets/broccoli_dancing.gif';

const Loading = () => {
    return (
        <div className="flex justify-center items-center flex-col" style={{height: '100vh'}}>
            <img src={ broccoli_dancing } className="w-52" alt="Broccoli dancing" />
            <h1 className="main_title text-primary-500">Loading...</h1>
        </div>
    );
}

export default Loading;