# add pop-up modal after add to cart using mixin

## implementation
1- research: 8h
before starting the taks, I have done the following:
    1- review magento docs:
        1. layouts
        2. templates
        3. js mixin
        4. magento UI widgets
    2- read blogs and watch videos on how mixins get implemented
2- blockers 8h
    1- first, I tried adding the mixin logic inside my theme, and it kept not working
        1- either js file not loaded when inspecting browser static files
        2- owner not found exception
        3- requireJs not loaded exception (after some time, I realized I have to wait till it loaded)
        
3- implementation 6h
    1- started working on custom module to create basic mixin that's working on the browser
    2- added modal widget and start manipulating its options
    3- added logic of modal inside my mixin

Total: 22h