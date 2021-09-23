function canine(state) {
    function bark() {
        console.log(`Woof, I'm a dog named {state.name}` )
    }

    return {bark}
}

