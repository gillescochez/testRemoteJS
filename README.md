# testRemoteJS

This little helper was created to help me create test case for my skeletons. As they all generate an object called skeleton in the window scope and because I didn't want to create one test file per skeleton I had to use multiple script tag to load multiple skeleton and resetting them after each tests.

The cascade of script tags make the test code very ugly so I wrote this little helper for Qunit so all test can be included in their own javascript files.

## in HTML document
```html
<script src="qunit.js"></script>
<script src="testRemoteJS.js"></script>
```

## in javascript
```javascript
testRemoteJS('script.js', function() {
    expect(1);
    ok(foo, 'foo exists');
});
```
