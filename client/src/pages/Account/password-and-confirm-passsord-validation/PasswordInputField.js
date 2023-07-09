import '../style.css'

function PasswordInputField({handleValidation, handlePasswordChange, passwordValue, passwordError, showPassword}){
    return (
        <>
    <div className="form-group my-3">
        <input  type={showPassword ? "text" : "password"}
                value={passwordValue}  
                onChange={handlePasswordChange} 
                onKeyUp={handleValidation} 
                name="password" 
                placeholder="Password" 
                className="form-control" />
        <p className="text-danger">{passwordError}</p>
   </div>
          
        </>
    )
}

export default PasswordInputField;