import React from 'react'
import AdminHeader from './AdminHeader'

const AddReference = () => {
    return (
        <>
            <AdminHeader />
                <div className="referenceWrapper">
                    <h1>Add a reference</h1>
                        <div className="formWrapper">
                            <form>
                                <div className="containerRight">
                                    <label>Title</label>
                                    <input name="title" type="text"></input>
                                    <label>label</label>
                                    <input name="label" type="text"></input>
                                    <label>Cat number</label>
                                    <input name="catalogueNumber" type="text"></input>
                                    <label>Year</label>
                                    <input name="year" type="text"></input>
                                    <label>Country</label>
                                    <input name="country" type="text"></input>
                                    <label>Style</label>
                                    <input name="style" type="text"></input>
                                    <label>Format</label>
                                    <input name="format" type="text"></input>
                                    <label>Quantity</label>
                                    <input name="quantity" type="text"></input>
                                    <label>Image</label>
                                    <input name="image" type="text"></input>
                                </div>
                                <div className="containerLeft">
                                    <label>Audio</label>
                                    <input name="audio" type="text"></input>
                                    <label>Audio</label>
                                    <input name="audio" type="text"></input>
                                    <label>Audio</label>
                                    <input name="audio" type="text"></input>
                                    <label>Audio</label>
                                    <input name="audio" type="text"></input>
                                    <label>Audio</label>
                                    <input name="audio" type="text"></input>
                                    <label>Audio</label>
                                    <input name="audio" type="text"></input>
                                </div>
                                
                            </form>
                            
                        </div>
                        <input type="submit" value="Add reference" className="btnRef"></input>
                </div>
        </>
    )
}

export default AddReference
