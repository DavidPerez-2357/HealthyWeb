import apple_crying from '/src/assets/apple_crying.gif';

const Error = ({ title='Error', message }) => {
    return (
        <div className="flex justify-center items-center flex-col" style={{height: '100vh'}}>
            <img src={ apple_crying } className="w-52" alt="Broccoli dancing" />
            <h1 className="main_title text-primary-500">{title}</h1>
            <p className="text-center text-gray-500 mt-2">{message}</p>
        </div>
    );
}

export default Error;