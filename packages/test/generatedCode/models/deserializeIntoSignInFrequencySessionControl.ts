import {deserializeIntoConditionalAccessSessionControl} from './deserializeIntoConditionalAccessSessionControl';
import {SignInFrequencySessionControl} from './index';
import {SignInFrequencyAuthenticationType} from './signInFrequencyAuthenticationType';
import {SignInFrequencyInterval} from './signInFrequencyInterval';
import {SigninFrequencyType} from './signinFrequencyType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSignInFrequencySessionControl(signInFrequencySessionControl: SignInFrequencySessionControl | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConditionalAccessSessionControl(signInFrequencySessionControl),
        "authenticationType": n => { signInFrequencySessionControl.authenticationType = n.getEnumValue<SignInFrequencyAuthenticationType>(SignInFrequencyAuthenticationType) as any ; },
        "frequencyInterval": n => { signInFrequencySessionControl.frequencyInterval = n.getEnumValue<SignInFrequencyInterval>(SignInFrequencyInterval) as any ; },
        "type": n => { signInFrequencySessionControl.type = n.getEnumValue<SigninFrequencyType>(SigninFrequencyType) as any ; },
        "value": n => { signInFrequencySessionControl.value = n.getNumberValue() as any ; },
    }
}
