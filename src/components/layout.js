import React from "react";
import classes from "../styles/layout.module.css";
import Image from "next/image";

function Layout({ children }) {
    return (
        <div>
            <div className={classes.profileWrapper}>
                <div className={classes.profileImageWrapper}>
                    <Image
                        className={classes.profileImage}
                        src="/profile-image.jpg"
                        width={150}
                        height={150}
                    />
                </div>
                <div className={classes.profileTextWrapper}>
                    <p className={classes.profileNameText}>Jesus Suarez</p>
                </div>
            </div>
            <div className={classes.container}>{children}</div>
        </div>
    );
}

export default Layout;
