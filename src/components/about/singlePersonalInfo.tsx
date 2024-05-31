const SinglePersonalInfo = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => {
  return (
    <div className="flex items-center">
      <p className="text-[#ffffffaf]">{label}:</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
};

export default SinglePersonalInfo;
