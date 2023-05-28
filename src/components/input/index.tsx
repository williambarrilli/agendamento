// recebe parametro label =
// text= acima do input,
// value= valor do input
//onChange = função para quando for digitado
// placeholder

export default function Input(
  type: string,
  value: string,
  placeholder: string,
  onChange: Function,
  label: string
) {
  return (
    <div>
      <h1>{label}</h1>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
