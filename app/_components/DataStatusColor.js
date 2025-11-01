export default function DataStatusColor({children, data}){
    return (
            // <b className={`${data ? 'text-primary-200' : 'text-accent-200'}`}>
            <b className={`${data === '?' || !data  ? 'text-accent-200' : 'text-primary-200'  }`}>
                {children}
            </b>
    )
}