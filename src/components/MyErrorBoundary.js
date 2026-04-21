import React from "react";
class MyErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    //OZUM YAZMISAM AI YAZMAYIB!!!
    // error olarsa erroru true eleemek ucundur
    getDerivedStateFromError(error) {
        return { hasError: true };
    }

    //BUNUDA MEN YAZMISAM 
    //erroru konsola cixardib gostermek ucun.
    componentDidCatch(error, info) {
        console.log("Error has been detected from shield", error);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '20px', background: '#ffdada', border: '1px solid red', borderRadius: '8px' }}>
                    <h3>❌This module is not working right now</h3>
                    <p>We working on this problem right now.</p>
                    <button onClick={() => this.setState({ hasError: false })}>Click For Try Again</button>
                </div>
            );
        }
        return this.Proops.children;
    }
}
export default MyErrorBoundary;