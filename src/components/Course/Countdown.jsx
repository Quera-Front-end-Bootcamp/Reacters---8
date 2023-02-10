const CountdownDigit = (props) => {
    return (
    <span className="h-6 w-4 bg-slate-300 mx-1"></span>
    );
}
const Countdown = (props) => {
    return(
    <div className="flex flex-row justify-center ">
    <CountdownDigit />
    <CountdownDigit />
    :
    <CountdownDigit />
    <CountdownDigit />
    :
    <CountdownDigit />
    <CountdownDigit />
</div>);
}
export default Countdown;