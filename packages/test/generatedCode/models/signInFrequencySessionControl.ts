import {ConditionalAccessSessionControl} from './index';
import {SignInFrequencyAuthenticationType} from './signInFrequencyAuthenticationType';
import {SignInFrequencyInterval} from './signInFrequencyInterval';
import {SigninFrequencyType} from './signinFrequencyType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SignInFrequencySessionControl extends ConditionalAccessSessionControl, Partial<Parsable> {
    /** The possible values are primaryAndSecondaryAuthentication, secondaryAuthentication, unknownFutureValue. */
    authenticationType?: SignInFrequencyAuthenticationType;
    /** The possible values are timeBased, everyTime, unknownFutureValue. */
    frequencyInterval?: SignInFrequencyInterval;
    /** Possible values are: days, hours. */
    type?: SigninFrequencyType;
    /** The number of days or hours. */
    value?: number;
}
