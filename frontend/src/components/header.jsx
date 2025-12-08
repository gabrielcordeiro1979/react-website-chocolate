export function Navbar() {
    return(
        <div class="containerd d-block w-100"> 
            <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom w-auto"> 
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"> 
                <svg class="bi me-2" width="40" height="32" aria-hidden="true">
                    <use xlink:href="#bootstrap"></use>
                </svg> 
                <span class="fs-4 px-2">Simple header</span> 
                </a> 
                <ul class="nav nav-pills px-1 flex-nowrap"> 
                    <li class="nav-item">
                        <a href="#" class="nav-link active" aria-current="page">Home</a>
                    </li> 
                    <li class="nav-item">
                        <a href="#" class="nav-link">Features</a>
                    </li> 
                    <li class="nav-item">
                        <a href="#" class="nav-link">Pricing</a>
                    </li> 
                    <li class="nav-item">
                        <a href="#" class="nav-link">FAQs</a>
                    </li> 
                    <li class="nav-item">
                        <a href="#" class="nav-link">About</a>
                    </li> 
                </ul> 
            </header> 
        </div>
    )
};
