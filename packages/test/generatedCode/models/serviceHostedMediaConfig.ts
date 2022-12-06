import {MediaConfig, MediaInfo} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceHostedMediaConfig extends MediaConfig, Partial<Parsable> {
    /** The list of media to pre-fetch. */
    preFetchMedia?: MediaInfo[];
}
