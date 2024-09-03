const Button = ({ label = "Submit", type = "submit" }) => {
	return <button type={type}>{label}</button>;
};

export default Button;
