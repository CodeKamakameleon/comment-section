export const Profile = ({ img, name }) => (
  <div className="flex gap-5 items-center">
    <img className="w-8" src={img} alt={`${name}'s pic`} />
    <span className="text-darkBlue font-medium">{name}</span>
  </div>
);
