import React, { useState } from "react";

const Login = ({ onLogin }) => {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [generatedOtp, setGeneratedOtp] = useState("");
    const [step, setStep] = useState(1);

    const adminPhones = ["918124483546", "918888777766"]; // Allowed admin numbers

    const generateOtp = () => {
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
        setGeneratedOtp(otpCode);
        // alert(`Simulated OTP: ${otpCode}`); // Replace with real SMS service in production
        const message = `Hi, I'm Nirmal your OTP is ${otpCode}`;
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = "919048149166"; // Replace with your actual WhatsApp number (no '+' or spaces)
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        setStep(2);
        window.open(whatsappURL, "_blank");
    };

    const handleSubmit = () => {
        if (otp === generatedOtp && adminPhones.includes(phone)) {
            onLogin("admin", phone);
        } else {
            onLogin("guest", phone);
        }
    };

    return (
        <div className="p-6 max-w-sm mx-auto rounded shadow">
            <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
            <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Phone Number"
                className="w-full border p-2 mb-4"
            />
            {step === 1 ? (
                <button
                    onClick={generateOtp}
                    className="bg-blue-500 text-white py-2 px-4 rounded w-full"
                >
                    Generate OTP
                </button>
            ) : (
                <>
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter OTP"
                        className="w-full border p-2 mb-4"
                    />
                    <button
                        onClick={handleSubmit}
                        className="bg-green-600 text-white py-2 px-4 rounded w-full"
                    >
                        Submit
                    </button>
                </>
            )}
        </div>
    );
};

export default Login;
