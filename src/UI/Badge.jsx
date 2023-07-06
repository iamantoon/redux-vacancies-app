import remove from './../assets/images/icon-remove.svg';

const Badge = ({variant = 'basic', colorScheme = 'light', children, onClear, onClick}) => (
    <div className={`badge badge--${variant} badge--${colorScheme}`} onClick={onClick}>
        <span>
            {children}
        </span>
        {variant === 'clearable' && (
            <div className='badge-remover' onClick={onClear}>
                <img src={remove} alt='remove' />
            </div>
        )}
    </div>
);

export default Badge;