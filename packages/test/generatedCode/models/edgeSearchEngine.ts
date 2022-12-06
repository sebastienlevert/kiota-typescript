import {EdgeSearchEngineType} from './edgeSearchEngineType';
import {EdgeSearchEngineBase} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdgeSearchEngine extends EdgeSearchEngineBase, Partial<Parsable> {
    /** Allows IT admind to set a predefined default search engine for MDM-Controlled devices */
    edgeSearchEngineType?: EdgeSearchEngineType;
}
