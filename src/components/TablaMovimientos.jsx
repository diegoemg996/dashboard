import React from 'react'

export const TablaMovimientos = () => {
    return (
        <div class="wrapper">
  
            <div class="table">
                <div class="row header">
                    <div class="cell">
                        Name
                    </div>
                    <div class="cell">
                        Age
                    </div>
                    <div class="cell">
                        Occupation
                    </div>
                    <div class="cell">
                        Location
                    </div>
                </div>
                
                <div class="row">
                    <div class="cell" data-title="Name">
                        Luke Peters
                    </div>
                    <div class="cell" data-title="Age">
                        25
                    </div>
                    <div class="cell" data-title="Occupation">
                        Freelance Web Developer
                    </div>
                    <div class="cell" data-title="Location">
                        Brookline, MA
                    </div>
                </div>
                
            </div>
        </div>
    )
}
