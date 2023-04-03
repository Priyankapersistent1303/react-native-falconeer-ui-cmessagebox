# react-native-falconeer-ui-cmessagebox

message dialog modal

## Installation

```sh
npm install react-native-falconeer-ui-cmessagebox
```

## Usage

```js
import CMessageBox from 'react-native-falconeer-ui-cmessagebox';

// ...
<CMessageBox
        title="Access Denied"
        message="You are not allowed to perform this operation. Please contact administrator."
        type="Error"
        isVisible={isVisible}
        onClose={() => {
          setVisible(false);
        }}
      />
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
