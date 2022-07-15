import {render, screen} from '@testing-library/react'
import Options from '../Options'

test('displays image for each scoop optioon from server', async () => {

    render(<Options optionType='scoops' />)

    // find images
    const scoopImages = await screen.findAllByRole('img', /scoop$/i)
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    const altText = scoopImages.map(element => element.alt)
    // when working with array and object using toEqual()
    expect(altText).toEqual(['choclate scoop', 'vanilla scoop'])




})