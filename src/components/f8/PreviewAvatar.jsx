import React, { useEffect } from 'react';
import { useState } from 'react';

const PreviewAvatar = () => {
    const [avatar, setAvatar] = useState();
    useEffect(() => {
        console.log("🚀 ~ file: PreviewAvatar.jsx:12 ~ useEffect ~ useEffect:")
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar]);
    const handleUpdateAvatar = (e) => {
        console.log('Action update avatar')
        const files = e.target.files || [];
        const url = files.length > 0 && URL.createObjectURL(files[0]);
        files.preview = url;
        setAvatar(files);
    }
    return (
        <div>
            <input type="file" name="avatar" id="" alt='choose-avatar' onChange={handleUpdateAvatar} />
            {console.log('Create DOM')}
            <img src={avatar ? avatar.preview : ''} alt="" sizes=""/>
           
        </div>
    );
};

export default PreviewAvatar;