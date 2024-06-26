import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const index = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 justify-center items-center">
      <Image
        source={{
          uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEUAAAD///97e3unp6d8fHz7+/ugoKDo6OgHBwfr6+ukpKRpaWlPT0+NjY2zs7MVFRXDw8PR0dE6Ojr19fXi4uLKysqampphYWGPj4+5ublbW1shISF1dXWCgoIZGRkjIyNEREQxMTFHR0fZ2dlmZmZcXFwPDw8sLCw2Njbf/8ASAAAIK0lEQVR4nO2d62KqOhCFoRbditu7Vmu1trbuvv8TnuIVMMCskMkkHNdvG/J1BXKfCUJA0/180Fts3uKX/uTjfT08HP78KmBV8oQ/h+H2/d/P5+tX/LRst0bjbkSvdED7WTRuvU14UTCtv5erjjHC8dIpuJTiQbc+4SiWxijXT7sCspyw+1cagKL+SJdw9iVdd6qGLR3Czot0vSENUMJoI11lVO9ziHAlXV8dxcpeUkkY+dVAb1J9clSEe+mK6uuZRNiSrmYdTabVhE/SlaypWRXhq3QNa2tcTtiXrp8BzcsImwCYQ8wS+t9ET9oXEfr+kbmpqyb0upvIaq0k9Lijv9e3gjCSrpRZ9e4JfR2LFmmWJ/RyNlGmjxxhw9poonaW0LsJL0HTNGFHujYceksTNu0zc9LsRjiTrguPvm6E3iwbgupcCLvSNeHS84XQi5VtLUVnQul68GlwIhxJ14NPuxOh47tLtdQ9EkrXglOthHAuXQtO9RPC5n5JE0W/hK5uYZvROGjivCmtdhCOpevAqzgIe9J14NU2CN+k68At+EOzjv8uei2F2ktoirJQlVGuXnu5wfcdwP7+Lb95lRV9PeuttJwSRYMhVuUp9Ot9ZQWoWx/b8n9VqbAXC1rprj5jBTw+ppSmFjRIQcZs1Q4mou/vbIAjhlkhb+OA/lPqq/NML7KtSYisDQLdIfnNAXbp1qVn0ooF7HQu6JWhPx9wMehrvY5A06MvdsdABaC91oUGIfCBpH95/yI1gBDXtE9YWsB8gb6Egf2rkYb625IYCenr+b3q56aFHQo4oDbSi6b3LCWnVJXCXMReAoSQPvBGCdGjHR+0s/cw4QcfIepi8TnfWoTvjITwAR2gQ6IXuuYkhF3cklsqvUz6ZEuHED9mtTJOeOAlhF2kflPdIcQR+4YJ6VfPNAnxhvpOGYu7RIi7SJlqO0WocaqzetboFqGGi5UPg0s08dAS4S5WzWQYAGsRarhYMaFiAKxHqOHik2eEGi6Wru0xANYlNIzIAFibUKOhliAyANYnNPq5YQA0QKjh4tImoe4KfFq4i0XrXwyAxf9ORLiLBRNGBsDgxQShhotjZTkMgAExhEaVcBeVKxsMfPQFhgrhLqq2GRn4AlMm4i5OrBG+SiEqen4OPvWTtAQ31Ps+gwMvUfl4ny7YxbsPKgfdUaYQYRfz9+w54E6ScnFnjVDMxdyQioXtLCkXs68iC9pFUi5mOn4WsquEXMwMjHnIrhJyMb2DygN2kxBiqsvg4UpJpqGmtqWYuFKScfHWTpmw0pJx8dpOmagyEnHx+j3lospIxMVL7BkuqKwkXBxaJRRxcWGVUMTFqVVCCcTYLqFEQ93bJRRwcWeZUMDFkWVC+y6ubRPad3Fg/QK6bRcPM+C+hRmJraPak9g6qj09EB+I/yvEx+dGUg8XyXq4KKmHi2Q9XJSUv4hPW+oPDSHabqgLeohMRRIGHxBbQOw6P11sIUEyvXwXk1PQ9AgMPrqYEAIX/T108XiSvU3/vX8uns7q029G++fiiRAJduqbi+f7FkiWD88Qz4RQWGW/Gurlzgw9KlHgmYvXW0H0QBOBXy5eCbFkJh65eLvZhSVS8MfF1N01LHKhNy6mCMGkO764mL5/CEZX9sTFzA1Lemiio/xwMUOIJjXxAjF7SxbdZvahoebuAaPR+D1wMX/TGZhHHeW+i3lCOL+Q8y7e3VaH03y57uL9fXw454ApRKaMHIqIA3DOS1OIPNkOVDEVoIlUIkOIPDnGVIR4HiVDiCztVBkXA098aQaRJfuPOvIH/igjiCxJuApim+CnBI0gMgAWRm+BVqaOMoHIAFgcnwZPxWMAkQGwJAIPPoyqj8gAWBZjCM9zUhuRAbA0ipJ9RAbA8jhRpgPOuUeokYy2HiIDYFWsryVcYC1E+mPMRffEE0fVQZQg1Eh8XQNRhFAjwZk+ogyhxrRNG1GIMIx2thDpTzAdzxvu+zUR6Q8wHnW+ZQeRXj71RCU99iU87ddCpBfPkP1h+mkBkV76P/OE+PhGA5Fe+A8HIdwz4oj0suktCopBG9FzEOkh0oumL1uD2ZDAFSoUkV4yPbMmGmV3iiXUBBHpBdMXj/Eou5iNECJylJf8Szhz2K+NUO5VBBFYEaZ/2GnZUXKa00cUECKQehM41qyXUxNZMKYjAj0uMIxEUmqlNAX2iciI9CIDYGdlWP1gtfY78jOIt22QFRNk9KEfZHdEHv6SXCRfT0oEbVOBGfzSGlAnooTcaxBgAHQsv+pDGfz0qjWpega4qIce/Hkd7COtjyrQ/cejopxWUXcO73SF3+hf+CaNtWrPpLGO65U+A6ajKc5oE1iPuGRZq4DtkJgj6gY6x0U80jYMmA7fuKJNQsh00M8NzY+EwBTRO4VHwgY3082JMMQWxXzS/kzIcpTRBSUpeE75f7C7aP5odSWE9/z80HHZ5ZzDSbouPBqkCBs5rtmGKUL80L0HGmUI8aMwzuu8Rn/Npda8GUY3R4ituXmgS1LoWz68hnX71wxYqYx/+AlRlzVVEDZqFjUPVYRT6WqZUyozeyYvJbYf4LDSW0jZzJsN6RWzyb0yhMjmsbvKJhPNZ09tgIu5vMV3+WHxC4WOKb+Ne58Bt+v3IHyR51Hl+PV5v21+R6PMYozfnHBEu3w+1iLCsEM/k+mS7lpoMaGXNhacMSjMtT3FL9yJajsqACnJJt7xaFJ8KD6vVZovvePJhGpSlte+IiN8NNhJV79Sm30pQnXO+27L4W2N7ea+A4QJEyfH7RiNKMSvz82KckLrP/FbYMHpQPdNAAAAAElFTkSuQmCC",
        }}
        style={{ width: 200, height: 200 }}
        className="m-5 rounded-lg"
      />
      <Text className="text-5xl ">NEWS APP</Text>
      <Text className="text-xl ">Get Latest News Here</Text>
      <Pressable
        className="p-4 bg-black rounded-lg m-5"
        onPress={() => {
          router.push("/Home");
        }}
      >
        <Text className="text-white ">Continue To Feed</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default index;
