const Stack = ({children, pos}) => (
    <div className='stack' style={{justifyContent: pos === 'center' ? 'center' : `flex-${pos}`}}>
        {children}
    </div>
);

export default Stack;