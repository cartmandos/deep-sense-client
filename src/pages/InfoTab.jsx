// eslint-disable-next-line react/prop-types
const InfoTab = ({ title, description }) => {
  return (
    <div className="w-4/5">
      <h2 className="mt-4 pb-2 font-semibold uppercase text-stone-700">{title}</h2>
      <p className="pb-3 text-stone-500">{description}</p>
    </div>
  )
}

export default InfoTab
