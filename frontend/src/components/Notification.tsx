import './Notification.css'
interface notif {
    message: string,
    sensitivity: 'h'|'m'|'l',
}
const Notification = ({message,sensitivity}:notif) => {
  return (
    <div className="fixed min-w-max rounded-lg flex items-center top-20 left-1/2  text-white" id={sensitivity}>
      <div className="px-4 py-4 font-bold" >{message}</div>
      <div className="font-extrabold rounded-r-xl px-5 py-4 cursor-pointer">X</div>
    </div>
  )
}

export default Notification