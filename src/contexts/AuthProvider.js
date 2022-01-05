import { createContext } from "react";
import useCourses from "../hooks/useCourses";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const AllContexts = useFirebase();
    const { courses } = useCourses();
    const data = { AllContexts, courses };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;