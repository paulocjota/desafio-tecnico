import axios from "axios";
import fetchLesson from "../../utils/fetchLesson";
import * as materialDeApoio from '../../utils/json/material-de-apoio.json'

jest.mock("axios");

describe('fetchLesson', () => {
    it('passing "material-de-apoio" should return the right content', async () => {
        axios.get.mockResolvedValueOnce(materialDeApoio);
        expect(await fetchLesson('material-de-apoio')).toEqual(materialDeApoio)
    })
})