import { useRouter } from 'next/navigation';

const ButtonTranslate = () => {
  const router = useRouter();

  const handleChange = (e: { target: { value: any; }; }) => {
    const locale = e.target.value;
    if (locale === '/') {
      router.push('/id');
    } else {
      router.push('/id');
    }
  };

  return (
    <div>
      <select className="bg-transparent" onChange={handleChange}>
        <option value="EN">EN</option>
        <option value="ID">ID</option>
      </select>
    </div>
  );
};

export default ButtonTranslate;
