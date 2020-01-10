import { Go, RouterActionTypes, Back, Forward } from './router.actions';

describe('Router Actions', () => {
    let actionResult;

    describe('Go', () => {
        it('successfully creates a Go action', () => {
            actionResult = new Go({ path: ['abc'] });
            expect({ ...actionResult }).toEqual({ type: RouterActionTypes.Go, payload: { path: ['abc'] } });
        });
    });

    describe('Back', () => {
        it('successfully creates a Back action', () => {
            actionResult = new Back();
            expect({ ...actionResult }).toEqual({ type: RouterActionTypes.Back });
        });
    });

    describe('Forward', () => {
        it('successfully creates a Forward action', () => {
            actionResult = new Forward();
            expect({ ...actionResult }).toEqual({ type: RouterActionTypes.Forward });
        });
    });
});
