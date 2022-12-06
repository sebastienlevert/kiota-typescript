import {deserializeIntoAuthenticationMethodConfiguration} from './deserializeIntoAuthenticationMethodConfiguration';
import {deserializeIntoAuthenticationMethodTarget} from './deserializeIntoAuthenticationMethodTarget';
import {TemporaryAccessPassAuthenticationMethodConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTemporaryAccessPassAuthenticationMethodConfiguration(temporaryAccessPassAuthenticationMethodConfiguration: TemporaryAccessPassAuthenticationMethodConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethodConfiguration(temporaryAccessPassAuthenticationMethodConfiguration),
        "defaultLength": n => { temporaryAccessPassAuthenticationMethodConfiguration.defaultLength = n.getNumberValue() as any ; },
        "defaultLifetimeInMinutes": n => { temporaryAccessPassAuthenticationMethodConfiguration.defaultLifetimeInMinutes = n.getNumberValue() as any ; },
        "includeTargets": n => { temporaryAccessPassAuthenticationMethodConfiguration.includeTargets = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAuthenticationMethodTarget) as any ; },
        "isUsableOnce": n => { temporaryAccessPassAuthenticationMethodConfiguration.isUsableOnce = n.getBooleanValue() as any ; },
        "maximumLifetimeInMinutes": n => { temporaryAccessPassAuthenticationMethodConfiguration.maximumLifetimeInMinutes = n.getNumberValue() as any ; },
        "minimumLifetimeInMinutes": n => { temporaryAccessPassAuthenticationMethodConfiguration.minimumLifetimeInMinutes = n.getNumberValue() as any ; },
    }
}
