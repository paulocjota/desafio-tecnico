import axios from "axios";
import fetchList from "../../utils/fetchList";
import * as root from '../../utils/json/root.json'

jest.mock("axios");

describe('fetchList', () => {
    it('should return the right content', async () => {
        axios.get.mockResolvedValueOnce(root)
        expect(await fetchList()).toEqual(root)
    })
})